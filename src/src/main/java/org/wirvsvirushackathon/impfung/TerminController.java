package org.wirvsvirushackathon.impfung;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.wirvsvirushackathon.impfung.Entity.Termin;

@RestController
public class TerminController {

	@Autowired
	TerminRepository terminRepository;

	private List<Termin> listOfTermine;
	
	private void addTermin() {
		Termin terminEntry = new Termin(LocalDateTime.now());
		terminRepository.save(terminEntry);
	}

	@GetMapping("/termine")
	ModelAndView terminEntries() {

		ModelAndView modelAndView = new ModelAndView("terminEntries");
		modelAndView.addObject("title", "Terminfindung");
		modelAndView.addObject("terminEntries", terminRepository.findAll()); // Alle Einträge im Repository zurückgeben.

		return modelAndView;
	}

	@RequestMapping("/get")
	public List<Termin> listoftermine() {
		listOfTermine = new ArrayList<Termin>();
		for (int i = 0; i < 10; i++) {
			addTermin();
		}
		
		listOfTermine = terminRepository.findAll();
		return listOfTermine;
	}


}
