import { BacNumbersLocators } from "../bac-numbers-locators";
import { BacNumbersConfigs } from "../bac-numbers-configs";
import { SmokeBases, Components} from "sc-automation-core";

class BacNumbersSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["player","banker","tie"],
      gameConfiguration: BacNumbersConfigs,
      locators: BacNumbersLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

  protected logWaning(): void {
    console.log("TrueWarning"); 
  }

  protected runScenario(): void {
    this.logWaning()
    super.runScenario();
  }

  
}

new BacNumbersSmokeSpec().start();
