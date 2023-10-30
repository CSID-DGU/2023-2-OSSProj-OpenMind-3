package com.ossprac.openmind.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;

@Getter
@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long id;

	@Column(name = "student_id", nullable = false)
	private String studentId;

	@JsonIgnore
	@Column(name="password")
	private String password;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "major", nullable = false)
	private String major; // 프로젝트에서 의미없는 값이므로 문자열로 처리함

	@Column(name = "img", columnDefinition = "TEXT", nullable = false)
	private String img;


}
