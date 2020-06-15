<?php

namespace Biz\ItemBank\Dao\Impl;

use Biz\ItemBank\Dao\ExerciseRightRecordDao;
use Codeages\Biz\Framework\Dao\GeneralDaoImpl;

class ExerciseRightRecordDaoImpl extends GeneralDaoImpl implements ExerciseRightRecordDao
{
    protected $table = 'item_bank_exercise_right_record';

    public function declares()
    {
        return [
            'timestamps' => ['createdTime', 'updatedTime'],
            'orderbys' => ['createdTime'],
            'conditions' => [
                'id = :id',
            ],
        ];
    }
}
