exports.up = function(knex) {
    return knex.schema.createTable('karyawan', function(table){
        table.increments();
        table.bigint('nik', 16);
        table.string('nama');
        table.string('tanggal_lahir', 20);
        table.string('jenis_kelamin');
        table.text('alamat');
        table.string('no_handphone', 13);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('karyawan');
};
