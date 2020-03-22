package org.wirvsvirushackathon.impfung;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.expression.ParseException;
import org.wirvsvirushackathon.impfung.Entity.Postcode;
import org.wirvsvirushackathon.impfung.Repository.PostcodeRepository;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class ReadPostcodes {

    @Autowired
    PostcodeRepository postcodeRepository;

    @PostConstruct
    private void loadPostodes()
            throws JsonMappingException, JsonProcessingException, org.json.simple.parser.ParseException {
        List<Postcode> postcodeList = new ArrayList<Postcode>();

        try (FileReader reader = new FileReader("plz.json")) {
            JsonArray postcodeListArray = new JsonParser().parse(reader).getAsJsonArray();

            // Iterate over postcode array
            for (JsonElement postcodeElement : postcodeListArray) {
                Postcode postcode = new Postcode();
                postcode.setPostcode(postcodeElement.getAsJsonObject().get("postal_code"));
                postcode.setCityname(postcodeElement.getAsJsonObject().get("place_name"));
                postcode.setState(postcodeElement.getAsJsonObject().get("admin_name1"));
                postcode.setDistrict(postcodeElement.getAsJsonObject().get("admin_name3"));
                postcode.setLatitude(postcodeElement.getAsJsonObject().get("latitude"));
                postcode.setLongitude(postcodeElement.getAsJsonObject().get("longitude"));
                postcodeList.add(postcode);
            }

            postcodeRepository.saveAll(postcodeList);

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }
    }
}
