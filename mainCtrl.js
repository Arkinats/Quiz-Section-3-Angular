
app.controller("quizCtrl", function($scope) {
    $scope.person = "";
    $scope.father = "";
    $scope.mother = "";
    $scope.flagged = false;
    $scope.hint = "";
    $scope.addPerson = function() {
        console.log("addPerson() called.");
        if( $scope.person != "" && $scope.father != "" && $scope.mother != "") {
            $scope.people.push({person: $scope.person, father: $scope.father, mother: $scope.mother, flagged: false})
            $scope.person = "";
            $scope.father = "";
            $scope.mother = "";
        }
        else {
            $scope.hint = "You can not enter a blank individual.";
        }
        
    };
    $scope.delHintShow = function() {
        $scope.hint = "Delete the selected items.";
    }
    $scope.delHintHide = function() {
        $scope.hint = "";
    }
    $scope.addHintShow = function() {
        $scope.hint = "Add a person to the list.";
    }
    $scope.addHintHide = function() {
        $scope.hint = "";
    }
    $scope.people = [
        {person: "Jeremiah Deschine", father: "Wilson Deschine", mother: "Susan Schultz", flagged: false},
        {person: "Danielle Lynch", father: "William Lynch", mother: "Maxine Toney", flagged: false},
        {person: "Taylor Deschine", father: "Jeremiah Deschine", mother: "Danielle Lynch", flagged: false}
    ];
    $scope.deleteSelected = function() {
        var i = $scope.people;
        $scope.people = [];
        angular.forEach(i, function(data) {
            console.log(data);
            if (data.flagged) {
                //do nothing
                console.log("delete + data.person: " + data.person);
            } else {
                $scope.people.push(data);
                console.log("save + data.person: " + data.person);
            }
        });
    };
});

