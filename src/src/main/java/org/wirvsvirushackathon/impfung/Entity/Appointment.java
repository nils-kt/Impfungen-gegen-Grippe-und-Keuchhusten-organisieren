package org.wirvsvirushackathon.impfung.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document
@Data
public class Appointment {
	
	@Id
	private String id;
	private LocalDateTime time;
	private String description;
	
	public Appointment(LocalDateTime time) {
		this.setTime(time);
	}	
}
