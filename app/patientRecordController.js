app.controller("patientRecordController", function($scope) {
    
    $scope.data = [];

    $scope.submitForm = function () {
        

        $scope.data.push(
            {
                'firstName': $scope.firstName ,
                'lastName': $scope.lastName ,
                'sex': $scope.sex ,
                'age': $scope.age ,
                'city': $scope.city ,
                'country': $scope.country ,
                'has_diabete': $scope.has_diabete ,
            }
        )

        $scope.firstName = ''
        $scope.lastName = ''
        $scope.sex = ''
        $scope.age = ''
        $scope.city = ''
        $scope.country = ''
        $scope.has_diabete = ''


    }



});