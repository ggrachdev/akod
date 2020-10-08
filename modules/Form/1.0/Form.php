<?php

/**
 *
 * Генератор форм
 *
 */

namespace Module\Form\v10;

use Module\Core\v10\Core;

interface GeneratorForms
{

    /**
     *
     * Сгенерировать форму
     *
     * @param array $ar_params_form - параметры для генерации
     * @param bool $echo - вывести через echo
     * @return mixed
     */
    static function generateForm(array $ar_params_form, bool $echo = false);

    /**
     *
     * Сгенерировать поле
     *
     * @param array || string $params_field
     * @param bool $echo - вывести сгенерированное поле через echo
     * @return mixed
     * @internal param array $ar_params_field - параметры поля
     */
    static function generateField($params_field, bool $echo = false);
}

class Form implements GeneratorForms
{

    /**
     *
     * Сгенерировать форму
     *
     * @param array $ar_params_form - параметры для генерации
     * @param bool $echo - вывести через echo
     * @return mixed
     */
    static function generateForm(array $ar_params_form, bool $echo = false)
    {

        $return_fields = '';

        $i = 0;
        foreach ($ar_params_form as $item_param) {
            if($i == 0) $item_param = 'f '.$item_param;
            $i++;
            $return_fields .= self::generateField($item_param);
        }

        if ($echo) {
            echo $return_fields . '</form>';
        } else
            return $return_fields . '</form>';
    }

    /**
     *
     * Сгенерировать поле
     *
     * @param array || string $params_field
     * @param bool $echo - вывести сгенерированное поле через echo
     * @return mixed
     * @internal param array $ar_params_field - параметры поля
     */
    static function generateField($params_field, bool $echo = false)
    {

        // TODO Files,
        $return_fields = '';

        if (is_string($params_field)) {
            $ar_params = explode(' ', trim($params_field));
            $type = $ar_params[0];

            switch ($type) {
                case '+':
                    array_shift($ar_params);

                    $return_fields = implode(' ', $ar_params);

                    if ($echo)
                        echo $return_fields;
                    else
                        return $return_fields;

                    break;

                case 'form':
                case 'f':
                    $type = 'form';

                    $return_fields = '<form';
                    break;

                case 'text':
                case 'txt':
                case 't':
                    $type = 'text';

                    $return_fields = '<input type="text"';
                    break;

                case 'password':
                case 'pas':
                case 'p':
                    $type = 'password';

                    $return_fields = '<input type="password"';
                    break;

                case 'hidden':
                case 'hid':
                case 'h':
                    $type = 'hidden';

                    $return_fields = '<input type="hidden"';
                    break;

                case 'checkbox':
                case 'ch':
                case 'c':
                    $type = 'checkbox';
                    $return_fields = '<input type="checkbox"';
                    break;

                case 'select':
                case 'sel':
                case 's':
                    $type = 'select';
                    $return_fields = '<select';
                    break;

                case 'option':
                case 'opt':
                case 'o':
                    $type = 'option';

                    $return_fields = '<option';
                    break;

                case 'textarea':
                case 'ta':
                    $type = 'textarea';

                    $return_fields = '<textarea';
                    break;

                case 'email':
                case 'em':
                case 'e':
                    $type = 'email';

                    $return_fields = '<input type="email"';
                    break;

                case 'submit':
                case 'sb':
                    $type = 'submit';

                    $return_fields = '<input type="submit"';
                    break;

                case 'number':
                case 'numb':
                case 'n':
                    $type = 'number';

                    $return_fields = '<input type="number"';
                    break;

                default:
                    continue;
                    break;
            }

            array_shift($ar_params);

            // Классы
            $str_class = '';

            // Value
            $str_value = '';

            // Options
            $str_options = '';

            // Options, checkbox, radio data
            $str_data = '';

            // Id
            $str_id = '';

            foreach ($ar_params as $paramField) {

                $paramField = str_replace(',', ' ', $paramField);

                switch ($paramField[0]) {

                    # class
                    case '.':
                        $str_class .= ltrim($paramField, '.') . ' ';
                        break;

                    #id
                    case '#':

                        $paramField = ltrim($paramField, '#');
                        $return_fields .= ' id="' . $paramField . '"';

                        $str_id = $paramField;
                        break;

                    # attr
                    case '[':
                        $data_field = explode('=', str_replace(['[', ']'], '', $paramField));

                        if (isset($data_field[1]))
                            $return_fields .= ' ' . $data_field[0] . '="' . $data_field[1] . '"';
                        else
                            $return_fields .= ' ' . $data_field[0];
                        break;

                    # option
                    case 'o':

                        $params = str_replace(['%%'], ' ', $paramField);

                        $str_options .= self::generateField($params);

                        break;

                    # value
                    case '{':
                        $data_field = str_replace(['{', '}'], '', $paramField);

                        $str_value = $data_field;

                        break;

                    # placeholder
                    case '(':
                        $data_field = str_replace(['(', ')', '%%'], ['', '', ' '], $paramField);

                        $return_fields .= ' placeholder="' . $data_field . '"';

                        break;

                    # required
                    case '!':
                        $return_fields .= ' required';

                        break;

                    # option_data
                    case '@':
                        $data_field = ltrim($paramField, '@');

                        $str_data = $data_field;

                        break;
                }


            }

            if (strlen($str_class) > 0)
                $return_fields .= ' class="' . trim($str_class) . '"';

            if ($type === 'textarea')
                $return_fields .= '>' . $str_value . '</textarea>';
            else if (
                $type === 'option'
            ) {
                if (strlen($str_value) > 0)
                    $return_fields .= ' value="' . $str_value . '"';

                $return_fields .= '>' . $str_data . '</option>';
            } else if (
                $type === 'select'
            ) {
                if (strlen($str_value) > 0)
                    $return_fields .= ' value="' . $str_value . '"';

                $return_fields .= '>' . $str_options . '</select>';
            } else if (
                $type === 'checkbox'
            ) {
                if (strlen($str_value) > 0)
                    $return_fields .= ' value="' . $str_value . '"';

                if (strlen($str_id) > 0)
                    $return_fields .= '><label for="' . $str_id . '">' . $str_data . '</label>';
                else
                    $return_fields .= '><label>' . $str_data . '</label>';
            } else if ($type === 'form') {
                $return_fields .= '>';
            } else {

                if (strlen($str_value) > 0)
                    $return_fields .= ' value="' . $str_value . '"/>';
                else
                    $return_fields .= '/>';
            }

            if ($echo)
                echo $return_fields;
            else
                return $return_fields;
        }
    }


    static function generateTable(array $headers, array $arr_data)
    {
        $content = '<div class="table">';
        $content .= '<div class="header">';

        foreach($headers as $k => $v)
        {
            $content .= '<div class="ceil_'.$v[1].'">'.$v[0].'</div>';
        }

        $content .= '</div>';

        $content .= '<div class="content">';

        foreach($arr_data as $ar_item)
        {
            $content .= '<div class="row">';

            foreach($headers as $k => $v)
            {
                $content .= '<div class="ceil ceil_'.$headers[$k][1].'">';

                // Добавляем кнопки
                if(!empty($headers[$k][2]))
                {
                    foreach ($headers[$k][2] as $ar_button)
                    {
                        if($ar_button[2] === true)
                            $local_data_attr = ' data-local-click="'.Core::genLocalData($ar_item, 'block').'" ';
                        else
                            $local_data_attr = '';

                        $content .= '<span'.$local_data_attr.'class="'.$ar_button[1].'">'.$ar_button[0].'</span> ';
                    }
                }
                $content .= @$ar_item[$k];
                $content .= '</div>';
            }



            $content .= '</div>';

        }

        $content .= '</div>';
        $content .= '</div>';



        return $content;
    }
}