package org.wirvsvirushackathon.impfung.Entity;

import com.google.gson.JsonElement;
import com.mongodb.lang.NonNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
@NoArgsConstructor
public class Postcode {

	@Id
	private String id;
	@NonNull
	private JsonElement postcode;
	@NonNull
	private JsonElement cityname;
	@NonNull
	private JsonElement state;
	@NonNull
	private JsonElement district;
	@NonNull
	private JsonElement latitude;
	@NonNull
	private JsonElement longitude;
}
