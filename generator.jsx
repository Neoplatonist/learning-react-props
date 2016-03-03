Generator = React.createClass({

  getInitialState: function() {
    return {

    };
  },

  handleStrengthCounting(event) {
    console.log(event);
    event.preventDefault();
    this.setState({strengthTotal: parseInt(this.refs.strengthBase.value) + parseInt(this.refs.strengthRaceMod.value) + parseInt(this.refs.strengthEnhancement.value) + parseInt(this.refs.strengthMisc.value)});
    {this.handleStrengthTotal()};
  },

  abilityModifier: function(x) {
    modifier = 0;
    switch (true) {
        case ((x == 10) || (x == 11)):
            modifier = 0;
            break;
        case ((x == 12) || (x == 13)):
            modifier = 1;
            break;
        case ((x == 14) || (x == 15)):
            modifier = 2;
            break;
        case ((x == 16) || (x == 17)):
            modifier = 3;
            break;
        case ((x == 18) || (x == 19)):
            modifier = 4;
            break;
        case (x == 20):
            modifier = 5;
            break;
        default:
            modifier = 0;
            break;
    }
    return modifier;
  },

  handleStrengthTotal(event) {
    event.preventDefault();
    this.setState({strengthModifier: this.abilityModifier(this.refs.strengthTotal.value)});
  },

  handleDexterityTotal(event) {
    event.preventDefault();
    this.setState({dexterityModifier: this.abilityModifier(this.refs.dexterityTotal.value)});
  },

  handleConstitutionTotal(event) {
    event.preventDefault();
    this.setState({constitutionModifier: this.abilityModifier(this.refs.constitutionTotal.value)});
  },

  handleIntelligenceTotal(event) {
    event.preventDefault();
    this.setState({intelligenceModifier: this.abilityModifier(this.refs.intelligenceTotal.value)});
  },

  handleWisdomTotal(event) {
    event.preventDefault();
    this.setState({wisdomModifier: this.abilityModifier(this.refs.wisdomTotal.value)});
  },

  handleCharismaTotal(event) {
    event.preventDefault();
    this.setState({charismaModifier: this.abilityModifier(this.refs.charismaTotal.value)});
  },

  render() {
    return (
      <div className="characterInput">
        <div className="row centered">
          <h2>Character Generator</h2>
        </div>
        <div className="row gen-r1">
          <div className="columns medium-6">
            <label htmlFor="">Character Name
              <input type="text" maxLength="25"/>
            </label>
          </div>
          <div className="columns medium-2">
            <label htmlFor="">Gender
              <input type="text" maxLength="6"/>
            </label>
          </div>
          <div className="columns medium-2">
            <label htmlFor="">Age
              <input type="number" maxLength="4"/>
            </label>
          </div>
          <div className="columns medium-2">
            <label htmlFor="">Height
              <input type="number"/>
            </label>
          </div>
        </div>

        <div className="row gen-r2">
          <div className="columns small-12 medium-9">
            <div className="row cscls">
              <div className="columns medium-5 class-input">
                <label htmlFor="">Class
                  <input type="text" maxLength="15"/>
                </label>
              </div>
              <div className="columns medium-5 sub-input">
                <label htmlFor="">Sub-Class
                  <input type="text" maxLength="15"/>
                </label>
              </div>
              <div className="columns medium-2 level-input">
                <label htmlFor="">Level/s</label>
                <div className="row">
                  <div className="columns medium-6">
                    <input type="number" className="class-lvl" maxLength="2"/>
                  </div>
                  <div className="columns medium-6">
                    <input type="number" className="subclass-lvl" maxLength="2"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns medium-3">
            <label htmlFor="">Experience Points
              <input type="number" maxLength="20"/>
            </label>
          </div>
        </div>

        <div className="row gen-r3">
          <div className="columns medium-3">
            <label htmlFor="">Race
              <input type="text"/>
            </label>
          </div>
          <div className="columns medium-3">
            <label htmlFor="">Alignment
              <input type="text"/>
            </label>
          </div>
          <div className="columns medium-3">
            <label htmlFor="">Background
              <input type="text"/>
            </label>
          </div>
          <div className="columns medium-3">
            <label htmlFor="">School of Thought
              <input type="text"/>
            </label>
          </div>
        </div>

        <div className="row gen-r4">
          <div className="columns medium-8">
            <div className="row ">
              <div className="columns medium-12">
                <div className="gen-abilities-header">
                  <h5>Abilities</h5>
                  <button>Roll Dice</button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="columns medium-12 ability-score-input">
                <div className="gen-abilities-body">
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        <th></th>
                        <th>Base Score</th>
                        <th></th>
                        <th>Racial Mod</th>
                        <th></th>
                        <th>Enhancement</th>
                        <th></th>
                        <th>Misc</th>
                        <th></th>
                        <th>Modifier</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="strengthInput"  onChange={this.handleStrengthCounting}>
                        <td><p>Strength</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="strengthTotal" value={this.state.strengthTotal} onChange={this.handleStrengthTotal} placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" ref="strengthBase" defaultValue="0"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" ref="strengthRaceMod" defaultValue="0"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" ref="strengthEnhancement" defaultValue="0"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" ref="strengthMisc" defaultValue="0"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="strengthModifier" value={this.state.strengthModifier} readOnly={this.state.strengthModifier}/>
                        </td>
                      </tr>

                      <tr className="dexterityInput">
                        <td><p>Dexterity</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="dexterityTotal" onChange={this.handleDexterityTotal}  placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" placeholder="8"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="3"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="dexterityModifier" value={this.state.dexterityModifier}/>
                        </td>
                      </tr>

                      <tr className="constitutionInput">
                        <td><p>Constitution</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="constitutionTotal" onChange={this.handleConstitutionTotal} placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" placeholder="8"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="3"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="constitutionModifier" value={this.state.constitutionModifier}/>
                        </td>
                      </tr>

                      <tr className="intelligenceInput">
                        <td><p>Intelligence</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="intelligenceTotal" onChange={this.handleIntelligenceTotal} placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" placeholder="8"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="3"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="intelligenceModifier" value={this.state.intelligenceModifier}/>
                        </td>
                      </tr>

                      <tr className="wisdomInput">
                        <td><p>Wisdom</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="wisdomTotal" onChange={this.handleWisdomTotal} placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" placeholder="8"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="3"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="wisdomModifier" value={this.state.wisdomModifier}/>
                        </td>
                      </tr>

                      <tr className="charismaInput">
                        <td><p>Charisma</p></td>
                        <td></td>
                        <td>
                          <input type="number" ref="charismaTotal" onChange={this.handleCharismaTotal} placeholder="15"/>
                        </td>
                        <td>=</td>
                        <td>
                          <input type="number" placeholder="8"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="3"/>
                        </td>
                        <td>+</td>
                        <td>
                          <input type="number" placeholder="2"/>
                        </td>
                        <td></td>
                        <td>
                          <input type="number" ref="charismaModifier" value={this.state.charismaModifier}/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>


          <div className="columns small-6 medium-2 skills-input">
            <div className="skills-input-body">
              <h6>Skills</h6>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Acrobatics (Dex)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Animal Handling (Wis)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Arcana (Int)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Athletics (Str)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Deception (Char)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>History (Int)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Insight (Wis)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Intimidation (Cha)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Investigation (Int)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Medicine (Wis)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Nature (Int)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Perception (Wis)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Performance (Char)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Persuasion (Cha)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Religion (Int)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Sleight of Hand (Dex)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Stealth (Dex)</p>
                </div>
              </div>
              <div className="row">
                <div className="columns medium-3">
                  <input type="checkbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Survival (Wis)</p>
                </div>
              </div>
            </div>
          </div>



          <div className="columns small-6 medium-2 saves-input">
            <div className="saves-input-body">
                  <h6>Saving Throws</h6>
              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Strength</p>
                </div>
              </div>

              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Dexterity</p>
                </div>
              </div>

              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Constitution</p>
                </div>
              </div>

              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Intelligence</p>
                </div>
              </div>

              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Wisdom</p>
                </div>
              </div>

              <div className="row">
                <div className="columns medium-3">
                  <input type="textbox"/>
                </div>
                <div className="columns medium-9">
                  <p>Charisma</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
});
