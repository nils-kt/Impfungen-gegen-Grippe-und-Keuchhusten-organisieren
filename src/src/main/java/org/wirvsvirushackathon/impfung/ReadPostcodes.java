package org.wirvsvirushackathon.impfung;

import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.expression.ParseException;
import org.wirvsvirushackathon.impfung.Entity.Postcode;
import org.wirvsvirushackathon.impfung.Repository.PostcodeRepository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

@Configuration
public class ReadPostcodes {

	@Autowired
	PostcodeRepository postcodeRepository;

	@PostConstruct
	private void loadPostodes()
			throws JsonMappingException, JsonProcessingException, org.json.simple.parser.ParseException {
		List<Postcode> postcodeList = new ArrayList<Postcode>();

		JSONParser jsonParser = new JSONParser();

		try (FileReader reader = new FileReader("plz.json")) {
			JsonArray postcodeListArray = new JsonParser().parse(reader).getAsJsonArray();

			// Iterate over postcode array
			for (JsonElement postcodeElement : postcodeListArray) {
				Postcode postcode = new Postcode();
				postcode.setPlace_name(postcodeElement.getAsJsonObject().get("postal_code"));
				postcode.setPostcode(postcodeElement.getAsJsonObject().get("place_name"));
				
				postcodeList.add(postcode);
				System.out.println("PLZ: " + postcodeElement.getAsJsonObject().get("postal_code") + " Ort: "
						+ postcodeElement.getAsJsonObject().get("place_name"));
			}
			
			postcodeRepository.saveAll(postcodeList);

		} catch (IOException | ParseException e) {
			e.printStackTrace();
		}
	}
}
