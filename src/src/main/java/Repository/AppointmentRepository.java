package Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.wirvsvirushackathon.impfung.Entity.Appointment;

/**
 * Hier findet der Zugriff auf die Datenbank statt.
 *
 */
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

}
