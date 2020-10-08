<?


if($system['user']->auth == false)
{
    redirect('/');
    return false;
}

return true;