<?php

namespace OCA\NotesTutorial\Tests\Unit\Service;

use OCA\NotesTutorial\Service\NoteNotFound;
use PHPUnit\Framework\TestCase;

use OCP\AppFramework\Db\DoesNotExistException;

use OCA\NotesTutorial\Db\Note;
use OCA\NotesTutorial\Service\NoteService;
use OCA\NotesTutorial\Db\NoteMapper;
use PHPUnit\Framework\MockObject\MockObject;

class NoteServiceTest extends TestCase {
	private NoteService|MockObject $service;
	private NoteMapper|MockObject $mapper;
	private string $userId = 'john';

	public function setUp(): void {
		/** @var NoteMapper|MockObject */
		$this->mapper = $this->getMockBuilder(NoteMapper::class)
			->disableOriginalConstructor()
			->getMock();
		$this->service = new NoteService($this->mapper);
	}

	public function testUpdate() {
		// the existing note
		$note = Note::fromRow([
			'id' => 3,
			'title' => 'yo',
			'content' => 'nope'
		]);
		$this->mapper->expects($this->once())
			->method('find')
			->with($this->equalTo(3))
			->will($this->returnValue($note));

		// the note when updated
		$updatedNote = Note::fromRow(['id' => 3]);
		$updatedNote->setTitle('title');
		$updatedNote->setContent('content');
		$this->mapper->expects($this->once())
			->method('update')
			->with($this->equalTo($updatedNote))
			->will($this->returnValue($updatedNote));

		$result = $this->service->update(3, 'title', 'content', $this->userId);

		$this->assertEquals($updatedNote, $result);
	}

	public function testUpdateNotFound() {
		$this->expectException(NoteNotFound::class);
		// test the correct status code if no note is found
		$this->mapper->expects($this->once())
			->method('find')
			->with($this->equalTo(3))
			->will($this->throwException(new DoesNotExistException('')));

		$this->service->update(3, 'title', 'content', $this->userId);
	}
}
