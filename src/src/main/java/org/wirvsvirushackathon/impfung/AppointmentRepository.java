package org.wirvsvirushackathon.impfung;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.wirvsvirushackathon.impfung.Entity.Appointment;

/**
 * Hier findet der Zugriff auf die Datenbank statt.
 * @author Yannick
 *
 */
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

}
