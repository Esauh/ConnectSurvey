/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Incident } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import IncidentCard from "./IncidentCard";
import { Collection } from "@aws-amplify/ui-react";
export default function AllIncidents(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Incident,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={4}
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "AllIncidents")}
      {...rest}
    >
      {(item, index) => (
        <IncidentCard
          incident={item}
          agent={item}
          margin="5px 5px 5px 5px"
          height="auto"
          width="auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></IncidentCard>
      )}
    </Collection>
  );
}
