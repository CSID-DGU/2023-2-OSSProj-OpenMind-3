package com.ossprac.openmind.lecture.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = lombok.AccessLevel.PROTECTED)
@Table(name = "lecture")
public class Lecture {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "lecture_id")
	private Long id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "is_open", nullable = false)
	private boolean isOpen;

	public Lecture(String name) {
		this.name = name;
		this.isOpen = false;
	}
}
