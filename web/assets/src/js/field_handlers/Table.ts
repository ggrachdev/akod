import {Field, InterfaceField} from "./InterfaceField";
import {lockBody, unlockBody, DoWithTrue} from "../functions";

declare var $: any;
declare var system: any;

class Table extends Field implements InterfaceField {

    public static is_init: boolean = false;

    public static save_columns_finish: boolean = false;
    public static save_rows_finish: boolean = false;
    public static refresh_columns_finish: boolean = false;
    public static refresh_rows_finish: boolean = false;

    public static renumColumns() {
        var num: number = 0;

        $('[data-type]').each(function () {
            if ($(this).data('type') == 'saved' || $(this).data('type') == 'parent') {
                num++;

                $(this).find('[data-context="num_column"]').html(num);
            }
        });
    }

    public static initContextMenu() {

        setTimeout(() => {
            $.contextMenu('destroy', '[data-context="row_table"]');

            $('[data-context="row_table"]').removeClass('context-menu-active');

            $.contextMenu({
                selector: '#modal_edit_field [data-context="row_table"]',
                items: {
                    add_up: {
                        name: "Добавить сверху", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            var clone: any = $(this).clone();
                            clone.find('input').val('');
                            $(this).before(clone);

                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },

                    add_down: {
                        name: "Добавить снизу", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            var clone: any = $(this).clone();
                            clone.find('input').val('');
                            $(this).after(clone);

                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },

                    up: {
                        name: "Поднять вверх", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            var prev = $(this).prev();
                            if (prev.length != 0) {
                                prev.before(clone);
                                $(this).remove();
                                Table.initContextMenu();
                                Table.renumColumnData();
                                now_object.saveRows();
                            }
                        }
                    },

                    down: {
                        name: "Опустить вниз", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            var clone = $(this).clone();
                            var next = $(this).next();
                            if (next.length != 0) {
                                next.after(clone);
                                $(this).remove();
                                Table.initContextMenu();
                                Table.renumColumnData();
                                now_object.saveRows();
                            }
                        }

                    },

                    delete: {
                        name: "Удалить", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            $(this).remove();
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },

                    delete_all: {
                        name: "Удалить все строки", callback: function (key: any, opt: any) {
                            var now_object: any = system.getLocalData("now_field_instance");
                            $('#tableData [data-context="row_table"]:not(:last)').remove();
                            Table.initContextMenu();
                            Table.renumColumnData();
                            now_object.saveRows();
                        }
                    },
                }
            });
        }, 200);
    }

    public static initScripts() {

        Table.initContextMenu();

        $(document).on('click', '[data-click="export_xls_table"]', function (e: any) {
            e.preventDefault();

            console.log(system.getLocalData("now_field_instance"));
            location.href = `/doc-generator/excel?uuid=${Field.id_field}`;


        });

        $(document).on('click', '[data-click="import_csv"]', function (e: any) {
            e.preventDefault();

            var now_object: any = system.getLocalData("now_field_instance");
            now_object.importCsv();

        });

        $(document).on('click', '[data-click="column_move_up"]', function () {

            var clone: any = $(this).closest('tr').clone();

            var prev: any = $(this).closest('tr').prev();

            if (prev.attr('data-type') !== 'parent') {
                $(this).closest('tr').prev().before(clone);

                $(this).closest('tr').remove();

                var now_object: any = system.getLocalData("now_field_instance");
                now_object.saveColumns();
                Table.renumColumns();
            }
        });

        $(document).on('click', '[data-click="column_move_down"]', function () {

            var clone: any = $(this).closest('tr').clone();

            var next: any = $(this).closest('tr').next();

            if (next.length > 0) {
                $(this).closest('tr').next().after(clone);

                $(this).closest('tr').remove();

                var now_object: any = system.getLocalData("now_field_instance");
                now_object.saveColumns();
                Table.renumColumns();
            }
        });

        $(document).on('input', '[data-context="row_value"]', function () {
            var now_object: any = system.getLocalData("now_field_instance");
            now_object.saveRows();
        });

        $(document).on('click', '[data-click="column_delete"]', function (e: any) {
            $(this).closest('tr').remove();

            Table.renumColumns();
        });

        $(document).on('click', '[data-click="remove_all_column_table"]', function (e: any) {
            $('#tableColumns tr:not(:last)').remove();
            $('[data-click="save_column"]').trigger('click');
            Table.renumColumns();
        });

        $(document).on('input', '[data-context="name_column"]', function (e: any) {
            var $tr: any = $(this).closest('tr');

            $tr.find('[data-click="save_column"]').show();

            Table.renumColumns();
        });

        $(document).on('click', '[data-click="save_column"]', function (e: any) {

            var now_object: any = system.getLocalData("now_field_instance");

            var $tr: any = $(this).closest('tr');

            var now_key: any = $tr.find('[data-context="key_column"]').val().trim();
            var now_name: any = $tr.find('[data-context="name_column"]').val().trim();

            var count: any = 0;
            $('[data-context="key_column"]').each(function () {
                if ($(this).val().trim() == now_key)
                    count++;
            });

            if (count > 1) {
                system.alert.add('Такой ключ уже существует', 'danger');
                return;
            }

            if (now_key.length != 0) {

                if (now_name.length != 0) {

                    $(this).closest('td').find('button').show();
                    $(this).hide();

                    $tr.attr('data-type', 'saved');

                    now_object.saveColumns();


                    DoWithTrue(function () {
                        now_object.saveRows();

                        DoWithTrue(function () {
                            now_object.refreshRown();

                            DoWithTrue(function () {
                                Table.renumColumns();
                            }, function () {
                                return Table.save_rows_finish;
                            });
                        }, function () {
                            return Table.save_rows_finish;
                        })
                    }, function () {
                        return Table.save_columns_finish;
                    }, 100, 50);

                  /*  setTimeout(() => {
                        now_object.saveRows();

                        setTimeout(() => {
                            now_object.refreshRown();
                        }, 4000);
                    }, 4000);*/

                    $tr.find('[data-context="key_column"]').attr('disabled', true);
                }
                else {
                    system.alert.add('Введите имя колонки!', 'danger');
                }
            }
            else {
                system.alert.add('Введите уникальный ключ колонки!', 'danger');
            }
        });

        $(document).on('click', '[data-click="add_column_table"]', function (e: any) {
            e.preventDefault();

            $('#tableColumns tbody').append(`
                <tr data-type="not_saved">
                    <th data-context="num_column"></th>
                    <td style="display: none;"><input class="form-control" data-context="key_column" value="${system.uuidv4()}" type="text" placeholder="Ключ колонки"></td>
                    <td><input class="form-control" data-context="name_column" type="text" placeholder="Название колонки"></td>
                    <td>
                        <button data-click="save_column" type="button" class="btn btn-success"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                        <button style="display: none;" data-click="column_move_up" type="button" class="btn btn-info"><i class="fa fa-arrow-up" aria-hidden="true"></i></button>
                        <button style="display: none;" data-click="column_move_down" type="button" class="btn btn-info"><i class="fa fa-arrow-down" aria-hidden="true"></i></button>
                        <button style="display: none;" data-click="column_delete" type="button" class="btn btn-danger"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </td>
                </tr>
            `);
        });

        $(document).on('change', '[name="show_only_parent_fields_table"]', function () {

            if($(this).is(':checked'))
            {
                var parent_id = $('li[role="treeitem"][aria-selected="true"]').closest('ul').closest('li[role="treeitem"]').attr('id');

                if(typeof parent_id != 'undefined')
                {

                    var count: number = 0;
                    $('[name="root_table"]').find('option').each(function () {
                        if($(this).attr('data-id-item') != parent_id)
                        {
                            $(this).hide();
                        }
                        else
                        {
                            count++;
                            $(this).show();

                            if(count == 1) {
                                $(this).prop('selected',true);
                            }
                        }
                    });

                    if(count == 0)
                    {
                        $('[data-error="not_found_table_parent"]').show();
                        $('[name="root_table"]').hide();
                    }
                    else
                    {
                        $('[name="root_table"]').show();

                        $('[data-error="not_found_table_parent"]').hide();
                    }
                }
            }
            else
            {
                console.log('not checked');

                $('[name="root_table"]').show();
                $('[data-error="not_found_table_parent"]').hide();

                $('[name="root_table"]').find('option').each(function () {
                    $(this).show();
                });
            }
        });

        $(document).on('change', '[data-type-field="table"] form', function () {

            if ($('[data-context="change_pid_table"]').length > 0) {

                $(this).serializeArray().forEach(function (item: any, i: number) {
                    if (item['name'] == 'type_table_parent') {
                        if (item['value'] == 'root') {
                            $('[data-context="select_root_table"]').hide();
                        }
                        else {
                            $('[data-context="select_root_table"]').show();

                            if(typeof $('[data-context="select_root_table"]').attr('data-init') == 'undefined')
                            {
                                $('[data-context="select_root_table"]').attr('data-init', 'true');
                            }
                        }
                    }
                });
            }
        })
    }

    public static renumColumnData() {
        var num: number = 0;

        $('[data-context="row_num"]').each(function () {
            num++;

            $(this).html(num);
        });
    }



    handlerAfterSave(response: any): void {
        console.log('handlerAfterSave');
        Table.save_rows_finish = true;
        Table.save_columns_finish = true;
    }

    saveColumns() {
        var now_object: any = system.getLocalData("now_field_instance");

        var data: any = {
            'type_save': 'save_columns',
            'name_table': $('[name="name_table"]').val().trim(),
        };

        var data_column: any = {};

        $('#tableColumns tbody tr[data-type="saved"]').each(function () {
            data_column[$(this).find('[data-context="key_column"]').val().trim()] = {
                'name': $(this).find('[data-context="name_column"]').val().trim()
            };
        });

        data['columns'] = data_column;
        data['rows'] = [];
        data['not_close_modal_edit'] = true;

        Table.save_columns_finish = false;
        now_object.save(JSON.stringify(data), null, false);
    }

    saveRows() {
        console.log('saveRows');

        var keys: any = {};

        var data: Array<any> = [];

        // Узнаем список ключей
        $('#tableData thead th').each(function () {

            var key: any = $(this).html().trim();

            if (key != '#') {
                keys[key] = '';
            }
        });

        // Узнаем список ключей
        $('#tableData [data-context="row_table"]').each(function () {

            var data_row: any = {};

            $(this).find('[data-key]').each(function () {
                var value = $(this).find('input').val();
                var key = $(this).attr('data-key');

                data_row[key] = value;
            });

            data[data.length] = data_row;
        });

        var data_save_rows: any = {};
        data_save_rows['data_for_save'] = data;
        data_save_rows['type_save'] = 'save_rows';
        data_save_rows['name_table'] = $('#nameTable').val();

        Table.save_rows_finish = false;
        super.save(JSON.stringify(data_save_rows), null, false, true);

    }

    importCsv() {
        // создадим объект данных формы
        var data: any = new FormData();

        var i = 0;
        $('[data-context="file_csv"]').each(function () {
            var files_attr = $(this)[0].files;

            if(files_attr.length > 0)
            {
                i++;
                data.append( `file_load_${i}`,  files_attr[0]);
            }
        });


        data.append( `has_not_header`, $('[name="csv_has_not_header"]').is(':checked'));
        super.saveWithFiles(data, {
            'type_save': 'import_csv'
        });
    }

    refreshRown() {
        Table.refresh_rows_finish = false;

        var data: any = {};

        super.refresh('refresh_rows', data);
    }

    refreshColumns() {
        Table.refresh_columns_finish = false;

        var data: any = {};

        super.refresh('refresh_columns', data);
    }

    handlerInit(e: any): boolean {
        e.preventDefault();

        var name_table: any = $('[name="name_table"]').val();
        var type_save: any = $('[name="type_save"]').val();

        var data: any = {};

        if (name_table.length > 0) {

            // Первичное сохранение
            if (type_save == 'first_save') {
                data['type_save'] = type_save;
                data['name_table'] = name_table;
                data['type_table'] = $('[name="type_table_parent"]:checked').val();

                if (data['type_table'] == 'other_table') {
                    data['type_table'] = $('[name="root_table"]').val();
                }

                super.save(JSON.stringify(data));
            }
            else if (type_save == 'second_save') {

                var now_object: any = system.getLocalData("now_field_instance");

                // При нажатии на кнопку сохранить
                now_object.saveColumns();

                // DoWithTrue(callback_true: any, callback_do: any, delay?: number, max_count?: number)

                DoWithTrue(function () {
                    now_object.saveRows();

                    DoWithTrue(function () {
                        now_object.refreshColumns();
                    }, function () {
                        return Table.save_rows_finish;
                    }, 100, 50);

                }, function () {
                    return Table.save_columns_finish;
                }, 100, 50);

          /*      setTimeout(() => {

                    setTimeout(() => {
                        now_object.refreshColumns();
                    }, 4000);

                }, 4000);*/
            }
            else {

            }
        }


        return true;
        // super.saveWithFiles(data);


    }

    handlerRefresh(response: any): void {
        console.log('handlerRefresh Table');
        console.log(response);

        switch (response.response.refresh_data.action_refresh) {
            case 'refresh_rows':
                Table.refresh_rows_finish = true;
                $('#tableData').each(function () {
                    $(this).html(`<br>${response.response.refresh_data.html}`);
                });
                Table.initContextMenu();
                break;
            case 'refresh_columns':
                Table.refresh_rows_finish = true;
                $('#tableColumns').html(`<br>${response.response.refresh_data.html}`);
                break;
        }
    }
}

export {Table};