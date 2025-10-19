import { Party } from '../Party'
import { Schedule } from '../Schedule'
import { Issue } from '../Issue'
import { Cargo } from '../Cargo'
import { Contract } from '../Contract'
import { Performance } from '../Performance'
import { Mark } from '../Mark'
import { Description } from '../Description'
import { EDI } from '../EDI'
import { AMSAddress } from '../AMSAddress'
import { Container } from '../Container'
import { ContainerSummary } from '../ContainerSummary'
import { HSCode } from '../HSCode'
import { Manifest } from '../Manifest'

class BL {
    party: Party
    schedule: Schedule
    issue: Issue
    cargo: Cargo
    contract: Contract
    performance: Performance
    mark: Mark
    description: Description
    edi: EDI
    amsAddress: AMSAddress
    container: Container
    containerSummary: ContainerSummary
    hsCode: HSCode
    manifest: Manifest

    constructor(
        party: Party,
        schedule: Schedule,
        issue: Issue,
        cargo: Cargo,
        contract: Contract,
        performance: Performance,
        mark: Mark,
        description: Description,
        edi: EDI,
        amsAddress: AMSAddress,
        container: Container,
        containerSummary: ContainerSummary,
        hsCode: HSCode,
        manifest: Manifest
    ) {
        this.party = party
        this.schedule = schedule
        this.issue = issue
        this.cargo = cargo
        this.contract = contract
        this.performance = performance
        this.mark = mark
        this.description = description
        this.edi = edi
        this.amsAddress = amsAddress
        this.container = container
        this.containerSummary = containerSummary
        this.hsCode = hsCode
        this.manifest = manifest
    }
}

export default BL