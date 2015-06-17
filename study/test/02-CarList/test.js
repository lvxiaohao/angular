/**
 * Created by 小昊 on 2015-06-18.
 */
describe("车辆控制器", function() {
   describe("CarListController", function() {
       it("应该有三条数据", function() {
           var scope = {},
               ctrl = new CarListController(scope);

           expect(scope.cars.length).toBe(3);
       });
   });
});
