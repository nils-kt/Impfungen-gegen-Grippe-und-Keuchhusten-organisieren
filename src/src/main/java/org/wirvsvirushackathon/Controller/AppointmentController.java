package org.wirvsvirushackathon.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.wirvsvirushackathon.impfung.Entity.Appointment;
import org.wirvsvirushackathon.impfung.Repository.AppointmentRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
public class AppointmentController {

	@Autowired
	AppointmentRepository appointmentRepository;

	private List<Appointment> listOfAppointments;
	
	private void addAppointment() {
		Appointment appointmentEntry = new Appointment(LocalDateTime.now());
		appointmentRepository.save(appointmentEntry);
	}

	@RequestMapping(method = RequestMethod.GET, value = "/appointments")
	ModelAndView appointmentEntries() {

		ModelAndView modelAndView = new ModelAndView("appointmentEntries");
		modelAndView.addObject("title", "Appointment");
		modelAndView.addObject("appointmentEntries", appointmentRepository.findAll());

		return modelAndView;
	}

	@RequestMapping(method = RequestMethod.GET, value = "/get")
	public List<Appointment> listofappointments() {
		listOfAppointments = new ArrayList<Appointment>();
		for (int i = 0; i < 10; i++) {
			addAppointment();
		}
		
		listOfAppointments = appointmentRepository.findAll();
		return listOfAppointments;
	}


}
