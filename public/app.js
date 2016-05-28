(function(){

    angular.module('app', [])
        .controller('c1', ['$scope', '$http', function($scope, $http){
            $scope.showUpdate=false;
            $scope.getC1 = function(){
                return $http.get('/api/c1').then(function(data){
                    $scope.c1s = data.data;
                });
            }
            $scope.addC1 = function(c1){
                $http.post('/api/c1',c1).then(function(data){
                    $scope.c1s.push(data.data);
                   //$scope.getC1();
                })
                
            }

            $scope.delC1 = function(c1){
                $scope.showUpdate=false;
                $http.delete('/api/c1/' + c1._id)
                    .then(function(data){
                        $scope.c1s = _.without($scope.c1s, c1);
                    })
            }
            
            $scope.updateC1 = function(c1){
                $http.put('/api/c1/' + c1._id, c1)
                    .then(function(data){
                        //$scope.c1s = _.without($scope.c1s);
                        $scope.getC1();
                    
                })
                
            }
        $scope.selectC1 = function(c1){
            $scope.showUpdate=true;
            $scope.nc1 = _.clone(c1);
         };
//            getC1();
        }]);
})();        

