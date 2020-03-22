package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class MedicalOffice {

	@Id
	private String id;
	private long postcode;
	private int numberOfVaccines;
	
	public MedicalOffice(long postcode, int numberOfVaccines) {
		this.postcode = postcode;
		this.numberOfVaccines = numberOfVaccines;
	}	
}
