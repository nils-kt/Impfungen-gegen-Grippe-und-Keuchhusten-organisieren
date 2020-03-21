package org.wirvsvirushackathon.impfung;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.expression.ParseException;
import org.wirvsvirushackathon.impfung.Entity.Postcode;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import Repository.PostcodeRepository;

@Configuration
public class ReadPostcodes {

	@Autowired
	PostcodeRepository postcodeRepository;

	@PostConstruct
	private void loadPostodes() throws JsonMappingException, JsonProcessingException, org.json.simple.parser.ParseException {
		List<Postcode> postcodeList = new ArrayList<Postcode>();
		
		JSONParser jsonParser = new JSONParser();

		try (FileReader reader = new FileReader("plz.json")) {
			Object obj = jsonParser.parse(reader);
			JSONArray postcodeListArray = (JSONArray) obj;

			// Iterate over postcode array
			postcodeListArray.forEach( postcode -> parsePostcodeObject((JSONObject) postcode, postcodeList));
			

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (ParseException e) {
			e.printStackTrace();
		}
	}

	private static void parsePostcodeObject(JSONObject postcode, List<Postcode> postcodeList) {
//		// Get postcode object within list
//		JSONObject postcodeObject = (JSONObject) postcode.get("employee");
//
//		// Get employee first name
//		String firstName = (String) employeeObject.get("firstName");
//		System.out.println(firstName);
//
//		// Get employee last name
//		String lastName = (String) employeeObject.get("lastName");
//		System.out.println(lastName);
//
//		// Get employee website name
//		String website = (String) employeeObject.get("website");
//		System.out.println(website);
//		
//		postcodeList.add(new Postcode());
	}
}
