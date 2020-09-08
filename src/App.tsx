import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Impress, Step } from 'react-impressjs'
import { Box } from '@dreitagebart/box'

import sapLogo from './assets/images/sap_trans.png'
import { ReactComponent as ClientServer } from './assets/images/client_server.svg'
import { ReactComponent as Landscape } from './assets/images/system_landscape.svg'
import { ReactComponent as ProcessLogic } from './assets/images/process_logic.svg'
import { GlobalStyle } from './assets/GlobalStyle'

const SAPLogoSmall = styled.img`
  width: 200px;
  height: auto;
`

const Intro = styled.div``

const Front = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.div`
  font-size: 2em;
`

const SubTitle = styled.div`
  font-size: 0.6em;
`

const Architecture = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 80px;
  font-weight: bold;
`

const Bold = styled.span`
  font-size: 1.4em;
  color: rgba(0, 0, 0, 0.6);
`

const ClientServerSVG = styled(ClientServer)`
  height: auto;
  background: #fff;
  padding: 1em;
  border-radius: 4px;
`

const LandscapeSVG = styled(Landscape)`
  background: #fff;
  padding: 1em;
  border-radius: 4px;
`

const ProcessLogicSVG = styled(ProcessLogic)`
  background: #fff;
  padding: 1em;
  border-radius: 4px;
`

const StepFormat = createGlobalStyle``

const App: React.FC = () => {
  return (
    <Impress
      progress
      rootData={{
        width: 1024,
        height: 768,
        maxScale: 10,
        minScale: 1,
        perspective: 3000,
        transitionDuration: 1000,
      }}
    >
      <StepFormat></StepFormat>
      <GlobalStyle></GlobalStyle>
      <Step
        id="intro"
        data={{
          x: 25000,
          y: 5000,
          z: 10000,
          rotateX: 0,
          rotateY: 50,
          rotateZ: 20,
          scale: 10,
        }}
      >
        <Front>
          <SAPLogoSmall src={sapLogo} alt="SAP Logo"></SAPLogoSmall>
          <Intro>
            <Title>crash course</Title>
            <SubTitle>von Stefan Büchold</SubTitle>
          </Intro>
        </Front>
      </Step>
      <Step
        id="history"
        data={{
          x: 0,
          y: -200,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 2,
        }}
      >
        <h1>SAP Entstehungsgeschichte</h1>
        <h4>...es war einmal in Walldorf</h4>
        <ul>
          <li>
            weltweit <strong>drittgrößter</strong> und europaweit <strong>größter</strong>{' '}
            Softwarehersteller
          </li>
          <li>
            Deutschlands <strong>wertvollstes Unternehmen</strong> (165 Mrd. Euro)
          </li>
          <li>
            Firmensitz in <strong>Walldorf</strong> bei Mannheim
          </li>
          <li>
            ca. <strong>100.000 Mitarbeiter</strong> weltweit
          </li>
          <li>
            betreut weltweit über <strong>440.000 Kunden</strong> Umsatz 2019: ~ 27,5 Mrd. Euro
          </li>
          <li>
            entwickelt <strong>Software für Unternehmen</strong> zur Abwicklung von gesamten
            Geschäftsprozessen z. B. Buchhaltung, Einkauf, Vertrieb, etc...
          </li>
        </ul>
      </Step>
      <Step
        id="milestones"
        data={{
          x: 2000,
          y: 400,
          z: 0,
          rotateX: 0,
          rotateY: 20,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>SAP Meilensteine</h1>
        <ul>
          <li>
            <Bold>1972</Bold> Gründung der Firma <strong>S</strong>ystem, <strong>A</strong>
            nalyse und <strong>P</strong>rogrammentwicklung in Weinheim
          </li>
          <li>
            <Bold>1976</Bold> Gründung der SAP GmbH
          </li>
          <li>
            <Bold>1977</Bold> Umzug von Weinheim nach Walldorf
          </li>
          <li>
            <Bold>1988</Bold> Aus der GmbH wird eine Aktiengesellschaft Umbenennung in Systeme,
            Anwendungen und Produkte Gang an die Börse
          </li>
          <li>
            <Bold>2005</Bold> Ernennung der Abkürzung SAP als Firmennamen und Logo
          </li>
          <li>
            <Bold>2014</Bold> Umwandlung SAP AG in SAP SE
          </li>
        </ul>
      </Step>
      <Step
        id="arch1970"
        data={{
          x: 3000,
          y: 0,
          z: 0,
          rotateX: 0,
          rotateY: -40,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>SAP Architekturen im Wandel</h1>
        <h4>1970er Jahre</h4>
        <ul>
          <li>1973 erstes Finanzbuchhaltungssoftware System RF</li>
          <li>bildet Grundstein für weitere Softwaremodule</li>
          <li>Gesamtprodukt heißt R/1</li>
          <li>
            Nutzung nur für Unternehmen mit IBM Großrechner und Betriebssystem DOS (nicht MS-DOS)
          </li>
        </ul>
        <Architecture>R/1 System</Architecture>
      </Step>
      <Step
        id="arch1980"
        data={{
          x: 4500,
          y: -500,
          z: 0,
          rotateX: 0,
          rotateY: -40,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>SAP Architekturen im Wandel</h1>
        <h4>1980er Jahre</h4>
        <ul>
          <li>
            mehr Konkurrenten für IBM Großrechner - z. B. Siemens, DEC, preisgünstigere Unix Server
          </li>
          <li>Initialzündung - Änderung der Architektur auf R/2</li>
          <li>
            Anwender und Programmierer arbeiteten mit textbasierten Bildschirmen und Tastaturen
          </li>
          <li>Programm und Benutzeroberfläche wurden auf einem zentralen Server ausgeführt</li>
          <li>Die Datenspeicherung erfolgt auf einem separaten Server</li>
        </ul>
        <Architecture>R/2 System</Architecture>
      </Step>
      <Step
        id="arch1990"
        data={{
          x: 5000,
          y: 200,
          z: 0,
          rotateX: 0,
          rotateY: 20,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>SAP Architekturen im Wandel</h1>
        <h4>1990er Jahre</h4>
        <ul>
          <li>stetig wachsende SAP Benutzerzahlen von Mitarbeitern in Großunternehmen</li>
          <li>Siegeszug der GUI</li>
          <li>Initialzündung - Architektur R/3</li>
        </ul>
        <Architecture>R/3 System</Architecture>
      </Step>
      <Step
        id="arch2000"
        data={{
          x: 6000,
          y: -200,
          z: 0,
          rotateX: 0,
          rotateY: -40,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>SAP Architekturen im Wandel</h1>
        <h4>2000er Jahre</h4>
        <ul>
          <li>Unterstützung für Webtechnologie und Java</li>
          <li>Alle Programme können absofort über einen Webbrowser erreichbar sein</li>
          <li>Technologische Grundlage: SAP Netweaver</li>
        </ul>
        <Architecture>R/3 System</Architecture>
      </Step>
      <Step
        id="arch2010"
        data={{
          x: 7500,
          y: -200,
          z: 0,
          rotateX: 0,
          rotateY: -20,
          rotateZ: 20,
          scale: 1,
        }}
      >
        <h1>SAP Architekturen im Wandel</h1>
        <h4>2010+</h4>
        <ul>
          <li>HANA Datenbank (In-Memory-Technology) als Paradigmenwechsel in der IT</li>
          <li>Vereinfachtere Datenstrukturen</li>
          <li>SAP Cloud Technologien</li>
          <li>IoT</li>
          <li>HTML5 Technologien / SAP UI5 / SAP Fiori</li>
        </ul>
        <Architecture>S/4 HANA</Architecture>
      </Step>
      <Step
        id="client_server"
        data={{
          x: 0,
          y: 2000,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>Die Client / Server Architektur</h1>
        <ul>
          <li>Die gesamte Last des SAP-Systems wird über mehrere Systeme verteilt</li>
          <li>
            <Bold>Datenbankschicht</Bold>
            <p>
              Enthält den gesamten Datenbestand eines SAP-Systems (Quelltexte,
              Customizing-Einstellungen, Unternehmensdaten)
            </p>
          </li>
          <li>
            <Bold>Applikationsschicht</Bold>
            <p>Hier findet die Verarbeitung des Programms statt</p>
            <p>Enthält Dienste und Workprozesse für die Verarbeitung</p>
          </li>
          <li>
            <Bold>Präsentationsschicht</Bold>
            <p>"Das was der Anwender sieht"</p>
            <p>Sendet Tastatureingaben und Mausklicks an die Applikationsschicht</p>
          </li>
        </ul>
      </Step>
      <Step
        id="client_server_image"
        data={{
          x: 0,
          y: 3000,
          z: -8000,
          rotateX: -20,
          rotateY: 20,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <ClientServerSVG></ClientServerSVG>
      </Step>
      <Step
        id="system_landscape"
        data={{
          x: 0,
          y: 4000,
          z: -12000,
          rotateX: 0,
          rotateY: -20,
          rotateZ: 0,
          scale: 2,
        }}
      >
        <LandscapeSVG></LandscapeSVG>
      </Step>
      <Step
        id="what_is_sap_erp"
        data={{
          x: 6000,
          y: 1000,
          z: 0,
          rotateX: 0,
          rotateY: 20,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>Was ist SAP ERP?</h1>
        <ul>
          <li>
            <Bold>ERP</Bold> <strong>E</strong>nterprise <strong>R</strong>esource{' '}
            <strong>P</strong>lanning
          </li>
          <li>allumfassendes Informations- und Verwaltungsinstrument für ein Unternehmen</li>
          <li>
            ein ERP umfasst alle Ressouren eines Unternehmens, welche damit verwaltet werden können
          </li>
          <li>unterschiedliche Bereiche im SAP ERP werden Module genannt:</li>
          <li>
            <ul>
              <li>
                <Bold>MM</Bold> Materials Management
              </li>
              <li>
                <Bold>WM</Bold> Warehouse Management
              </li>
              <li>
                <Bold>SD</Bold> Sales Distribution
              </li>
              <li>
                <Bold>PP</Bold> Production Planning
              </li>
              <li>
                <Bold>FI/CO</Bold> Financials / Controlling
              </li>
            </ul>
          </li>
        </ul>
      </Step>
      <Step
        id="abap"
        data={{
          x: 7000,
          y: 3000,
          z: -15000,
          rotateX: 0,
          rotateY: 0,
          rotateZ: -20,
          scale: 3,
        }}
      >
        <h1>Programmentwicklung im SAP</h1>
        <ul>
          <li>
            <Bold>ABAP</Bold> - <strong>A</strong>dvanced <strong>B</strong>usiness{' '}
            <strong>A</strong>
            pplication <strong>P</strong>rogramming - ehemals <strong>A</strong>llgemeiner{' '}
            <strong>B</strong>erichts<strong>A</strong>ufbereitungs<strong>P</strong>rozessor
          </li>
          <li>proprietäre Programmiersprache der SAP</li>
          <li>
            ereignisorientierte Sprache - Programmabschnitte werden erst nach Benutzerinteraktion
            ausgeführt
          </li>
          <li>objektorientierte Programmierung möglich</li>
        </ul>
      </Step>
      <Step
        id="ddic"
        data={{
          x: 0,
          y: 1000,
          z: -10000,
          rotateX: 0,
          rotateY: -20,
          rotateZ: 20,
          scale: 2,
        }}
      >
        <h1>Programmentwicklung im SAP</h1>
        <ul>
          <li>
            <Bold>DDIC</Bold> Data Dictionary - zentrale Ablage für Datentypen, Strukturen,
            Tabellen, Klassen, etc.
          </li>
          <li>SAP Standard Programme</li>
          <li>Kundennamensraum (Z* / Y* Objekte)</li>
          <li>registrierter Entwicklungsnamensraum für WITTENSTEIN (/WITT/* Objekte)</li>
        </ul>
      </Step>
      <Step
        id="dialog_report"
        data={{
          x: 4000,
          y: 10000,
          z: -20000,
          rotateX: 40,
          rotateY: 0,
          rotateZ: -20,
          scale: 1,
        }}
      >
        <h1>Programmentwicklung im SAP</h1>
        <ul>
          <li>Grundsätzliche Unterscheidung in Dialogprogramm (Dynpro) und Report</li>
          <li className="no-bullet">
            <Bold>Report</Bold>
          </li>
          <li>Folgt einem simplen Programmfluss - Eingabe &gt; Verarbeitung &gt; Ausgabe</li>
          <li>ausführbares Programm - kann für Jobs verwendet werden</li>
          <li>wird für einfache Programme verwendet / "Berichte" im historischen Sinne</li>
          <li className="no-bullet">
            <Bold>Dialog / Dynpro</Bold>
          </li>
          <li>kein fest vorgeschriebener Programmfluss</li>
        </ul>
      </Step>
      <Step
        id="process_logic"
        data={{
          x: 8000,
          y: 10000,
          z: -14000,
          rotateX: 0,
          rotateY: 20,
          rotateZ: 0,
          scale: 1,
        }}
      >
        <h1>Ablauflogik eines ABAP Programms</h1>
        <ProcessLogicSVG></ProcessLogicSVG>
      </Step>
    </Impress>
  )
}

export default App
