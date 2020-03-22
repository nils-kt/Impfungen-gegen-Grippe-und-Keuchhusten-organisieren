package org.wirvsvirushackathon.impfung;

import static org.springframework.boot.SpringApplication.run;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories("org.wirvsvirushackathon.impfung.Repository")
@ComponentScan(basePackageClasses = org.wirvsvirushackathon.Controller.AppointmentController.class)
@ComponentScan(basePackageClasses = org.wirvsvirushackathon.impfung.ReadPostcodes.class)
public class ImpfungApplication {
	
	public static void main(String[] args) {
		run(ImpfungApplication.class, args);
	}
}
