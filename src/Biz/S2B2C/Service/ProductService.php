<?php

namespace Biz\S2B2C\Service;

interface ProductService
{
    public function searchProduct($conditions);

    public function createProduct($fields);

    public function getProduct($id);
}
