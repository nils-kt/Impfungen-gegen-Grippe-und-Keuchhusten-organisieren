package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Document
@NoArgsConstructor
public class Postcode {

	@Id
	private String id;
	@NonNull
	private int postcode;
	@NonNull
	private String cityname;
	@NonNull
	private String citydistrict;
	@NonNull
	private String country;
	@NonNull
	private String state;
	@NonNull
	private double latitude;
	@NonNull
	private double longitude;
}