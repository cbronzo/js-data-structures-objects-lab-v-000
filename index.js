// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {}
  newDriver[key] = value
  return Object.assign(newDriver, driver)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey() {
  const newDriver = Object.assign({}, driver)
  delete.newDriver 
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   return delete driver[key]
}