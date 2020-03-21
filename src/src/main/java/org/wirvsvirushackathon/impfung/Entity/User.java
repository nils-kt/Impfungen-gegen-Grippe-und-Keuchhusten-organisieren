package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class User {

	@Id
	private String id;
	private String name;
	private String emailAdress;
	private Appointment appointment;
}
