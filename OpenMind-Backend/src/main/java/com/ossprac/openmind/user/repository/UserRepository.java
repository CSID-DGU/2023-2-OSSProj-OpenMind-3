package com.ossprac.openmind.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ossprac.openmind.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByStudentId(String studentId);
}
