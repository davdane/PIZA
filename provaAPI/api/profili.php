<?php
include_once 'config/cors.php';
include_once 'config/dbh.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
 if (isset($_GET['id'])){
     $id = $conn->real_escape_string($_GET['id']);
     $sql = $conn->query("SELECT * FROM profiles WHERE id='$id'");
     $data = $sql->fetch_assoc();
 } else {
     $data = array();
     $sql = $conn->query("SELECT * FROM profiles");
     while ($d = $sql->fetch_assoc()){
         $data[]=$d;
     }
 }
 exit(json_encode($data));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $sql = $conn->query("INSERT INTO profiles (id_user, nome, cognome, altezza, peso, data) 
    VALUES ('".$data->id_user."','".$data->nome."','".$data->cognome."','".$data->altezza."','".$data->peso."','".$data->data."')");
    if ($sql) {
        $data->id=$conn->insert_id;
        exit (json_encode($data));
    }
    else {
        exit (json_encode(array('status'=>'error')));
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    if (isset($_GET['id'])) {
        $id = $conn->real_escape_string($_GET['id']);
        $data = json_decode(file_get_contents("php://input"));
        $sql = $conn->query(
            "UPDATE profiles SET id_user = '".$data->id_user."', nome = '".$data->nome."', cognome = '".$data->cognome."', 
            altezza = '".$data->altezza."', peso = '".$data->peso."', data = '".$data->data."' WHERE id_profiles = '$id'");
        if ($sql) {
            exit (json_encode(array('status' => 'success')));
        } else {
            exit (json_encode(array('status' => 'error')));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if (isset($_GET['id'])) {
        $id = $conn->real_escape_string($_GET['id']);
        $sql = $conn->query("DELETE FROM profiles WHERE id_profiles='$id'");

        if ($sql) {
            exit (json_encode(array('status' => 'success')));
        } else {
            exit (json_encode(array('status' => 'error')));
        }
    }
}