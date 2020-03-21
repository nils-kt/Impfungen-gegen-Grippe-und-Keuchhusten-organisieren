package org.wirvsvirushackathon.impfung.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Appointment {
	
	@Id
	private String id;
	private LocalDateTime time;
	private String description;
	
	public Appointment(LocalDateTime time) {
		this.setTime(time);
	}

	public LocalDateTime getTime() {
		return time;
	}

	public void setTime(LocalDateTime time) {
		this.time = time;
	}
	
}