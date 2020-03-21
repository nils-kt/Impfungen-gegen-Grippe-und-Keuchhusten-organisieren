package org.wirvsvirushackathon.impfung.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Postcode {

	@Id
	private String id;
}
