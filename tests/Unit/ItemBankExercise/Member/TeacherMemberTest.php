<?php

namespace Tests\Unit\ItemBankExercis\Member;

use Biz\BaseTestCase;
use Biz\ItemBankExercise\Member\TeacherMember;
use Biz\ItemBankExercise\Service\ExerciseService;
use Biz\Role\Util\PermissionBuilder;
use Biz\User\CurrentUser;

class TeacherMemberTest extends BaseTestCase
{
    public function testJoin()
    {
        $exercise = $this->createExercise();
        $currentUser = new CurrentUser();
        $currentUser->fromArray([
            'id' => 2,
            'nickname' => 'admin3',
            'email' => 'admin3@admin.com',
            'password' => 'admin',
            'currentIp' => '127.0.0.1',
            'roles' => ['ROLE_USER', 'ROLE_SUPER_ADMIN'],
        ]);
        $currentUser->setPermissions(PermissionBuilder::instance()->getPermissionsByRoles($currentUser->getRoles()));
        $this->getServiceKernel()->setCurrentUser($currentUser);
        $teacherMember = new TeacherMember($this->biz);
        $teacherMember->join($exercise['id'], $currentUser->getId(), ['remark' => 'test']);
        $res = $this->getExerciseService()->isExerciseTeacher($exercise['id'], 2);
        $this->assertEquals(true, $res);
    }

    private function createExercise()
    {
        return $this->getExerciseService()->create(
            [
                'id' => 1,
                'title' => 'test',
                'questionBankId' => 1,
                'categoryId' => 1,
                'seq' => 1,
                'expiryMode' => 'forever',
            ]
        );
    }

    /**
     * @return ExerciseService
     */
    protected function getExerciseService()
    {
        return $this->createService('ItemBankExercise:ExerciseService');
    }
}
