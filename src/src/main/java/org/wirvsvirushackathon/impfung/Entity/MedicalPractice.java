package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class MedicalPractice {

	@Id
	private String id;
	private String name;
	private int numberOfVaccines;
	
	public MedicalPractice(String name, int numberOfVaccines) {
		this.setName(name);
		this.setNumberOfVaccines(numberOfVaccines);
	}	
}
