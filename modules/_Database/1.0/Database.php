<?php

$host = $config['db']['host'];
$db = $config['db']['db'];
$user = $config['db']['user'];
$pass = $config['db']['password'];
$charset = 'utf8';

$dsn = "pgsql:host=$host;dbname=$db";

$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $opt);
} catch (PDOException $e) {
    $pdo = null;
    die('Подключение не удалось: ' . $e->getMessage());
}

function query(string $query, array $params = [], string $type = 'query')
{
    global $pdo, $config;

    if ($config['debug'] === true) {
        if ($config['query'] == null) $config['query'] = [];
        $config['query'][] = ['query' => $query, 'params' => $params];
    }

    try {

        switch ($type)
        {
            case 'query':
                $stmt = $pdo->prepare($query);
                $stmt->execute($params);
                $data['data'] = $stmt->fetchAll();
                break;

            case 'id':
                // TODO: Get insert, update, delete id
                break;
        }

    } catch (PDOException $e) {
        $data['result'] = 0;
        $data['error'] = $e->getMessage();
    }

    if (!empty($data['data']))
        $data['result'] = 1;

    return $data;

}
