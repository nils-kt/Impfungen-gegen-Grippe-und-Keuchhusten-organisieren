package org.wirvsvirushackathon.impfung.Entity;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Document
@Data
@RequiredArgsConstructor
public class Appointment {
	
	@Id
	private String id;
	@NonNull
	private LocalDateTime time;
	private String description;
}
