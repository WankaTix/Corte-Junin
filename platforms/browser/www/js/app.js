angular.module('app-csjj', [])
    .run(function () {
        console.log('App running...');
    })
    .controller('busquedaCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.organosjson = [];
        $scope.organos = [];
        $scope.jurisdicciones = [];
        $scope.expedientes = [];
        $scope.sedes = [
            //{ idSede: 0, nameSede: "Seleccione" },
            { idSede: 1501, nameSede: "SEDE CENTRAL" },
            { idSede: 1504, nameSede: "CHUPACA" },
            { idSede: 1515, nameSede: "CONCEPCION" },
            { idSede: 1507, nameSede: "JUNIN" },
            { idSede: 1527, nameSede: "JPL - ACOBAMBA" },
            { idSede: 1521, nameSede: "JPL - COLCABAMBA" },
            { idSede: 1503, nameSede: "JPL - CHILCA" },
            { idSede: 1502, nameSede: "JPL - HUANCAYO" },
            { idSede: 1525, nameSede: "JPL - MAZAMARI" },
            { idSede: 1524, nameSede: "JPL - PERENE" },
            { idSede: 1510, nameSede: "JPL - PICHANAKI" },
            { idSede: 1522, nameSede: "JPL - SAN AGUSTIN DE CAJAS" },
            { idSede: 1511, nameSede: "JPL - SAN MARTIN DE PANGOA" },
            { idSede: 1523, nameSede: "JPL - SAN RAMON" },
            { idSede: 1509, nameSede: "JPL - VILLA RICA" },
            { idSede: 1517, nameSede: "JAUJA" },
            { idSede: 1505, nameSede: "LA MERCED" },
            { idSede: 1520, nameSede: "LA MERCED - NLPT" },
            { idSede: 1506, nameSede: "SALAS DE LA MERCED" },
            { idSede: 1514, nameSede: "LA OROYA" },
            { idSede: 1519, nameSede: "NLPT - TAMBO" },
            { idSede: 1508, nameSede: "OXAPAMPA" },
            { idSede: 1518, nameSede: "PAMPAS" },
            { idSede: 1512, nameSede: "SATIPO" },
            { idSede: 1516, nameSede: "TARMA" },
            { idSede: 1513, nameSede: "SALA DE TARMA" }
        ];

        $scope.organos_data = [
            {
                id: "dep01",
                dependencia: "CHANCHAMAYO",
                sedes: [
                    { location: "Dist. La Merced Jr. Junín N° 399; Jr. Amazonas y Palca; Zuchetti N° 166"},
                    { location: "Dist. Perene Av. Esperanza S/N"},
                    { location: "Dist. Pichanaki Micaela Bastidas N° 239"},
                    { location: "Dist. San Ramon Jr. Apurimac N° 252-254"}
                ]
            },
            {
                id: "dep02",
                dependencia: "CHUPACA",
                sedes: [
                    { location: "Dist. Chupaca Jiron Grau N° 100"}
                ]
            },
            {
                id: "dep03",
                dependencia: "CONCEPCION",
                sedes: [
                    { location: "Dist. Concepcion AV. LEOPOLDO PEÑA 152"}
                ]
            },
            {
                id: "dep04",
                dependencia: "HUANCAYO",
                sedes: [
                    { location: "Dist. Chilca Pasaje San Andres N° 188"},
                    { location: "Dist. El Tambo	Jr. Parra del Riego"},
                    { location: "Dist. Huancayo	Calle San Juan 346"},
                    { location: "Dist. San agustin de Cajas	Av. 20 de Marzo S/N Palacio Municipal"}
                ]
            },
            {
                id: "dep05",
                dependencia: "JAUJA",
                sedes: [
                    { location: "Dist. Jauja Av. Tarma 1053"}
                ]
            },
            {
                id: "dep06",
                dependencia: "JUNIN",
                sedes: [
                    { location: "Dist. Junin Calle Simon Bolivar N° 119"}
                ]
            },
            {
                id: "dep07",
                dependencia: "OXAPAMPA",
                sedes: [
                    { location: "Dist. Oxapampa	Jr Bolognesi 335"},
                    { location: "Dist. Villa Rica Jr. Cooperativa N° 369"}
                ]
            },
            {
                id: "dep08",
                dependencia: "SATIPO",
                sedes: [
                    { location: "Dist. Mazamari	Calle las Malvinas S/N"},
                    { location: "Dist. San Martin de Pangoa	Avenida 28 de Julio, cuadra 6"},
                    { location: "Dist. Rio Tambo Puerto Prado - Puerto Remolino S/N"},
                    { location: "Dist. Satipo Jr. Micaela Bastidas N° 1022"}
                ]
            },
            {
                id: "dep09",
                dependencia: "TARMA",
                sedes: [
                    { location: "Dist. Acobamba	Manuel A. Odria S/N"},
                    { location: "SMDT Jr. Lima 510"},
                    { location: "NCPP Jr. Cuzco Edificio Fortunato Cardenas"},
                    { location: "Dist. Tarma Av. Fco. de Marini 404-406 ; Calle Lima 510; Jr. Cuzco"}
                ]
            },
            {
                id: "dep10",
                dependencia: "TAYACAJA",
                sedes: [
                    { location: "Dist. Pampas Jr. Mariscal Caceres N° 1555"},
                    { location: "Dist. Surcubamba Plaza Principal S/N"}
                ]
            },
            {
                id: "dep11",
                dependencia: "YAULI",
                sedes: [
                    { location: "Dist. La Oroya	Av. Horacio Zevallos N° 345"}
                ]
            }
        ];

        $scope.directorio = [
            {
                instancia: "2º SALA PENAL",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx. 40043 / 40040 CENTRAL: 064 481490"
            },{
                instancia: "1° Juzgado de Trabajo",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx. 40060 / 40061 CENTRAL: 064 481490"
            },{
                instancia: "3º Juzgado de Familia",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx. 40007 / 40009 CENTRAL: 064 481490"
            },{
                instancia: "1° Juzgado de Trabajo Transitorio",
                direccion: "JR. PARRA DEL RIEGO Nº 400 EL TAMBO",
                telefono: "CENTRAL 064 481490"
            },{
                instancia: "2º SALA PENAL LIQUIDADORA",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx. 40043 / 40040 CENTRAL: 064 481490"
            },{
                instancia: "1º Juzgado Civil",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx.40027 / 40028 CENTRAL: 064 481490"
            },{
                instancia: "Juzgado de Tránsito y Seguridad Vial",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx. 40018 / 40071 CENTRAL: 064 481490"
            },{
                instancia: "4to Juzgado Civil - Comercial",
                direccion: "JR. PARRA DEL RIEGO Nº 400",
                telefono: "Anx.40077 / 40067 CENTRAL: 064-481490"
            }
        ]

        $scope.anios = GetAnios();

        $scope.ver_sec1 = true;
        $scope.ver_sec2 = false;
        $scope.ver_sec3 = false;

        $scope.GetOrganos = function () {
            $http({
                method: 'GET',
                url: 'http://172.36.3.95/webapi/webapi.php?select=orgsjurisd&opcion=' + $scope.idsede
            }).then(
                function successCallback(res) {
                    $scope.organos = res.data;
                },
                function errorCallback(err) {
                    console.log(err);
                }
            );
        };

        $scope.GetEspecialidad = function () {
            console.log($scope.idorga);
            $http({
                method: 'GET',
                url: 'http://172.36.3.95/webapi/webapi.php?select=&opcion=' + $scope.idorga
            }).then(
                function successCallback(res) {
                    $scope.jurisdicciones = res.data;
                },
                function errorCallback(err) {
                    console.log(err);
                }
            );
        };

        $scope.GetExpedientes = function () {
            var x_url = 'http://172.36.3.95/CEJJ/webapi_consulta.php?sedes=' + $scope.idsede + '&orgsjurisd=' + $scope.idorga + '&especialidad=' + $scope.idjurid + '&codAnio=' + $scope.idanio + '&NumExp=' + $scope.numExp;
            console.log(x_url);
            $http({
                method: 'GET',
                url: x_url
            }).then(
                function successCallback(res) {
                    $scope.expedientes = res.data;
                    $scope.ver_sec1 = false;
                    $scope.ver_sec2 = true;
                },
                function errorCallback(err) {
                    console.log(err);
                }
            );
        };

        $scope.GetDetalleExpediente = function (ndi) {
            // http://172.36.3.95/CEJJ/webapi_reporte_seguimiento.php?sedes=1501&nid=2016000041501122&inc=0&pag=1
            var x_url = 'http://172.36.3.95/CEJJ/webapi_reporte_seguimiento.php?sedes=' + $scope.idsede + '&nid=' + ndi + '&inc=0&pag=1';
            console.log(x_url);
            $http({
                method: 'GET',
                url: x_url
            }).then(
                function successCallback(res) {
                    $scope.detalle_expediente = res.data;
                    console.log($scope.detalle_expediente);
                    $scope.ver_sec2 = false;
                    $scope.ver_sec3 = true;
                },
                function errorCallback(err) {
                    console.log(err);
                }
            );

        };

        $scope.IsArray = function (value) {
            return Object.prototype.toString.call(value) === "[object Array]";
        }


    }]);

    function GetAnios() {
        var anio = new Date().getFullYear();
        var aniox = [];
        for (var i = anio; i > anio - 15; i--) {
            aniox.push({id: i, name: i});
        }
        return aniox
    }
