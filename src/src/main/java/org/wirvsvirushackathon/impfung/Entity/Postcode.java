package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.google.gson.JsonElement;
import com.mongodb.lang.NonNull;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Document
@RequiredArgsConstructor
public class Postcode {

	@Id
	private String id;
	@NonNull
	private JsonElement postcode;
	@NonNull
	private JsonElement place_name;
	private String adminCode2;
	
	
}
