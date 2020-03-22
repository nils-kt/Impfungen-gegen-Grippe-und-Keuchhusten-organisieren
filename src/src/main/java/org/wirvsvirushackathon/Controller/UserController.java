package org.wirvsvirushackathon.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.wirvsvirushackathon.impfung.Repository.AppointmentRepository;

@RestController
public class UserController {

	@Autowired
	AppointmentRepository appointmentRepository;

	//TODO
	//Get the inputs from the user (from the UI).
	
	//Create the current user via the inputs (postcode, name etc.).
	
	//Read the postcodes and find other postcodes near to the entered postcode.
}
