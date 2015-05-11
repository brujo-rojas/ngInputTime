angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DropdownCtrl', function ($scope, $log) {

    
    $scope.hora = 5;
    $scope.minutos = 15;

$scope.arreglo = [
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30},
  {hora: 3, minutos:30}
]
  
    
})



.directive("timeInput", function(){
  
  return{
    restrict : "E",
    templateUrl:"template.html",
    scope:{hora_dir:"=tiHora", minutos_dir:"=tiMinutos"},
    link:  function($scope, element, attributes) {
          console.log("link");
          console.dir($scope);
          console.dir(element);
          console.dir(attributes);
          
          
          
          
          $scope.agregarHora = function($event){
            $event.preventDefault(); 
            $event.stopPropagation();
            $scope.hora_dir += 1;
          }
          
          $scope.agregarMinutos = function($event){
            $event.preventDefault(); 
            $event.stopPropagation();
            $scope.minutos_dir += 15;
          }
          
          
          
          
          $scope.quitarHora = function($event){
            $event.preventDefault(); 
            $event.stopPropagation();
            $scope.hora_dir -= 1;
          }
          
          $scope.quitarMinutos = function($event){
            $event.preventDefault(); 
            $event.stopPropagation();
            $scope.minutos_dir -= 15;
          }
          
        }
  }
  
})
