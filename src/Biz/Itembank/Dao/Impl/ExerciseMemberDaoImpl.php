<?php

namespace Biz\ItemBank\Dao\Impl;

use Biz\ItemBank\Dao\ExerciseMemberDao;
use Codeages\Biz\Framework\Dao\GeneralDaoImpl;

class ExerciseMemberDaoImpl extends GeneralDaoImpl implements ExerciseMemberDao
{
    protected $table = 'item_bank_exercise_member';

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
