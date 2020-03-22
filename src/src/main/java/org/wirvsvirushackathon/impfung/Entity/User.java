package org.wirvsvirushackathon.impfung.Entity;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.wirvsvirushackathon.impfung.Enum.Adiposity;
import org.wirvsvirushackathon.impfung.Enum.ChronicLungDisease;
import org.wirvsvirushackathon.impfung.Enum.Diabetes;
import org.wirvsvirushackathon.impfung.Enum.HeartDisease;
import org.wirvsvirushackathon.impfung.Enum.Vaccination;

import lombok.Data;

@Data
@Document
public class User {

	@Id
	private String id;
	private String firstname;
	private String lastname;
	private String gender;
	private LocalDate dateOfBirth;
	private boolean wasTreveling;
	private boolean isPresick;
	private boolean isKO;
	private boolean hasLimpPain;
	private boolean hasPersistentCoughing;
	private boolean hasDiarrhoea;
	private boolean hasThroatPain;
	private boolean hasSniff;
	private boolean hasHeadache;
	private boolean hasOutOfBreathFaster;
	private boolean hasCloseContactToConfirmedCoronaCase;
	private boolean hasCloseContactToConfirmedCoronaSuspectedCase;
	private boolean hasFever;
	private boolean isTakingCortisone;
	private boolean isTakingImmunsuppressiva;
	
	private Vaccination vaccination;
	private Diabetes diabetes;
	private HeartDisease heartDisease;
	private ChronicLungDisease chronicLungDisease;
	private Adiposity adiposity;
	
	private Appointment appointment;
	private Postcode postcode;
}
