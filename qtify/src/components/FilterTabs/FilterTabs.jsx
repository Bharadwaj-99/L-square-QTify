import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Section from "../Section/Section";
import styles from "./FilterTabs.module.css";
import { allSongsTabs } from "../config/helper-config";


const FilterTabs = ({ data, loadingState }) => {
	const [value, setValue] = useState(0);
	// console.log("filter",data);	
	const _handleTabs = (e, val) => {
		console.log("val=",val);
		setValue(val);
	};

	function TabPanel(props) {
		const { children, value, index } = props;
		return <div>{value === index && <>{children}</>}</div>;
	}

	
	const filteredData = (tabIndex) => {
		console.log("tabIndex",tabIndex);
		if (tabIndex === 0) {
			return data;
		} else {
			const tabLabel = ["Rock", "Pop", "Jazz", "Blues"][tabIndex - 1];
			console.log("===tableLable===",tabLabel,data?.filter(
				(item) => item?.genre?.key === tabLabel?.toLowerCase()
			));
			return data?.filter(
				(item) => item?.genre?.key === tabLabel?.toLowerCase()
			);
		}
	};

	return (
		<div className={styles.filterSectionWrapper}>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={_handleTabs}
						aria-label="basic tabs"
						id={styles.tabs_wrapper}>
						{allSongsTabs.map((each) => (
							<Tab label={each} key={each} sx={{ color: "white" }} />
						))}
					</Tabs>
				</Box>

				{allSongsTabs.map((_, index) => (
					<TabPanel key={index} value={value} index={index}>
						<div>
							<Section
								data={filteredData(index)}
								type="songs"
								header={"filterAll"}
								loadingState={loadingState}
							/>
						</div>
					</TabPanel>
				))}
			</Box>
		</div>
	);
};

export default FilterTabs;
