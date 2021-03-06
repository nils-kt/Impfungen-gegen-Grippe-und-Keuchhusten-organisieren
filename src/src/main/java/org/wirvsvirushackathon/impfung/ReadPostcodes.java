package org.wirvsvirushackathon.impfung;

import static org.asynchttpclient.Dsl.asyncHttpClient;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

import javax.annotation.PostConstruct;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Request;
import org.asynchttpclient.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.wirvsvirushackathon.impfung.Entity.Postcode;
import org.wirvsvirushackathon.impfung.Repository.PostcodeRepository;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;

/**
 * @TODO: Read the postcodes and find other postcodes near to the entered postcode.
 */
@Configuration
@EnableAsync
public class ReadPostcodes {

    @Autowired
    PostcodeRepository postcodeRepository;

    @PostConstruct
    @Async
	void loadPostodes() throws JsonSyntaxException, InterruptedException, ExecutionException {
        int[] plzDummy = new int[]{38524, 38100, 38102, 38110, 38111, 27894};
        AsyncHttpClient asyncHttpClient = asyncHttpClient();
        for (int plz : plzDummy) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("User-Agent",
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36");
            Request request = asyncHttpClient.prepareGet(
                    "https://nominatim.openstreetmap.org/search?q=" + plz + "&format=json&polygon=1&addressdetails=1")
                    .setHeaders(headers).build();
            Future<Response> whenResponse = asyncHttpClient.executeRequest(request);
            
            boolean isDone = false;
            
            
            while (true) {
                if (whenResponse.isDone()) {
                    // Parse response to json
                    JsonArray response = new JsonParser().parse(whenResponse.get().getResponseBody()).getAsJsonArray();
                    int index = 0;
                    for (JsonElement _response : response) {
                        JsonObject address = _response.getAsJsonObject().get("address").getAsJsonObject();
                        Postcode postcode = new Postcode();
                        postcode.setCitydistrict(address.get("county").getAsString().trim());
                        postcode.setCityname(address.get("village").getAsString().trim());
                        postcode.setCountry(address.get("country_code").getAsString().trim());
                        postcode.setLatitude(Double.parseDouble(_response.getAsJsonObject().get("lat").getAsString().trim()));
                        postcode.setLongitude(Double.parseDouble(_response.getAsJsonObject().get("lon").getAsString().trim()));
                        postcode.setPostcode(Integer.parseInt(address.get("postcode").getAsString().trim()));
                        postcode.setState(address.get("state").getAsString().trim());
                        postcodeRepository.save(postcode);
                        if(index++ == response.size() -1){
                            isDone = true;
                        }
                    }
                }
                if(isDone) {
                	return;
                }
                Thread.sleep(100);
            }
        }

    }
}
