<?php

declare(strict_types=1);

namespace OCA\NotesTutorial\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\SimpleMigrationStep;
use OCP\Migration\IOutput;

/**
 * Auto-generated migration step: Please modify to your needs!
 */
class Version1400Date20181013124730 extends SimpleMigrationStep {

	/**
	 * @param IOutput $output
	 * @param Closure $schemaClosure The `\Closure` returns a `ISchemaWrapper`
	 * @param array $options
	 * @return null|ISchemaWrapper
	 */
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('notes_meta')) {
			$table = $schema->createTable('notes_meta');
			$table->addColumn('id', 'integer', [
				'autoincrement' => true,
				'notnull' => true,
			]);
			$table->addColumn('file_id', 'integer', [
				'notnull' => true,
			]);
			$table->addColumn('user_id', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('last_update', 'integer', [
				'notnull' => true,
			]);
			$table->addColumn('etag', 'string', [
				'notnull' => true,
				'length' => 32,
			]);

			$table->setPrimaryKey(['id']);
			$table->addIndex(['file_id'], 'notes_meta_file_id_index');
			$table->addIndex(['user_id'], 'notes_meta_user_id_index');
			$table->addUniqueIndex(['file_id', 'user_id'], 'notes_meta_file_user_index');
		}
		return $schema;
	}

}
