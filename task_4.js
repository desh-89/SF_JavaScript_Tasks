function Appliance(name) {
    this.voltage = 220;
    this.deviceTurned = false
  }
  Appliance.prototype.deviceSwitch = function(deviceSwitch) {
    if (deviceSwitch === 'on') {
      this.deviceTurned = true;
    } else {
      this.deviceTurned = false;
    }
  }
  Appliance.prototype.energyConsumption = function(time) {
  let сonsumption = this.devicePower * time * 0.01;
  console.log(`Устройство ${this.name} за время работы ${time}ч потратил ${сonsumption} кВт*ч `);
  }

  function Monitor(name, amperage, size) {
    this.name = name;
    this.size = size + " дюймов";
    this.amperage = amperage;
    this.devicePower = Math.round(this.voltage * amperage)
  }
  Monitor.prototype = new Appliance();
  Monitor.prototype.getInfo = function() {
    console.log(`Параметры монитора ${this.name}`);
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
    console.log('\n');
  }

  function Computer(name, amperage, numberCores) {
    this.name = name;
    this.numberCores = numberCores + " ядер центрального процессора";
    this.amperage = amperage;
    this.devicePower = Math.round(this.voltage * amperage)
  }
  Computer.prototype = new Appliance();
  Computer.prototype.getInfo = function() {
    console.log(`Параметры компьютера ${this.name}`);
    for (const key in this) {
      if (typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
    console.log('\n');
  }

  const mac = new Computer('Mac Mini', 0.7, 6); // name, amperage, number of CPU cores
  const monitor = new Monitor('Samsung', 0.1, 27); // name, amperage, size (inch)
  
  mac.getInfo();
  monitor.getInfo();
  
  mac.deviceSwitch('on');
  mac.getInfo();
  
  mac.energyConsumption(4);
  monitor.energyConsumption(4);
