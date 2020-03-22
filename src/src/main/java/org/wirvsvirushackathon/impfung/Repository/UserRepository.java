package org.wirvsvirushackathon.impfung.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.wirvsvirushackathon.impfung.Entity.User;

/**
 * Hier findet der Zugriff auf die Datenbank statt.
 */
public interface UserRepository extends MongoRepository<User, String> {

}

