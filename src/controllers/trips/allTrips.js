AllTripsCtrl.$inject = ['Trip', '$scope'];

function AllTripsCtrl(Trip, $scope) {
  const vm = this; //ViewModel - allows us to use this in function
  vm.allUsersTrips = [];

  $scope.$on('All trips sent', (e, allTrips) => {
    console.log('Received all trips for that user:', allTrips);
    vm.allUsersTrips = allTrips;
  });

}

export default AllTripsCtrl;