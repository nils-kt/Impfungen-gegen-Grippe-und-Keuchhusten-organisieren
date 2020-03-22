package org.wirvsvirushackathon.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.wirvsvirushackathon.impfung.Entity.User;
import org.wirvsvirushackathon.impfung.Repository.AppointmentRepository;
import org.wirvsvirushackathon.impfung.Repository.PostcodeRepository;
import org.wirvsvirushackathon.impfung.Repository.UserRepository;

@RestController
public class UserController {

	User currentUser;
	
	@Autowired
	AppointmentRepository appointmentRepository;

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	PostcodeRepository postcodeRepository;

	// Get the inputs from the user (from the UI).
	// Create the current user via the inputs (postcode, name etc.).
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/postUserData", method = RequestMethod.POST)
	public String handleUserInput(@RequestBody User requestUser) {
		currentUser = requestUser;
		
		System.out.println(requestUser);
		userRepository.save(requestUser);
		
		calculate();
		return "Okay!";
	}
	
	private void calculate() {

		//TODO: Check, if postcode is in database.
		
		//Load postcodes from database:
		//List<Postcode> postcodeList = postcodeRepository.findAll();
	}
	
}