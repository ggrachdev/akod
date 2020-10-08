<?

if($system['user']->auth == true)
{
    redirect('/cabinet');
    return false;
}

return true;